import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductsShop {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

interface ProductsShopState {
    originalProducts: ProductsShop[];
    products: ProductsShop[];
    visibleProducts: number;
    status: "idle" | "loading" | "succeeded" |"failed";
    error: string | null;
    option: "all" | "highToLow" | "lowToHigh";
    selectedCategories: string[];
    categoryCounts: Record<string, number>;
    priceRange: [number, number];
}

const initialState: ProductsShopState = {
    originalProducts: [],
    products: [],
    visibleProducts: 9,
    status: "idle",
    error: null,
    option: "all",
    selectedCategories: [],
    categoryCounts: {},
    priceRange: [0, 2000]
}

export const fetchAllProducts = createAsyncThunk("productsShop/fetchAllProducts",async()=>{
    const response = await axios.get<ProductsShop[]>("https://fakestoreapi.com/products");
    return response.data;
})

const filterAndSortProducts = (state: ProductsShopState) => {
    let filteredProducts = state.originalProducts.filter(product =>
        state.selectedCategories.length === 0 || state.selectedCategories.includes(product.category) && product.price >= state.priceRange[0] && product.price <= state.priceRange[1]
    );

    switch(state.option){
        case "highToLow":
            state.products = [...filteredProducts].sort((a, b) => b.price - a.price);
            break;
        case "lowToHigh":
            state.products = [...filteredProducts].sort((a, b) => a.price - b.price);
            break;
        case 'all':
        default:
            state.products = filteredProducts;
            break;
    }
}

const calculateCategoryCounts = (products: ProductsShop[]) => {
    return products.reduce((counts, product) => {
        counts[product.category] = (counts[product.category] || 0) + 1;
        return counts;
    }, {} as Record<string, number>);
}

const productsShopSlice = createSlice({
    name: 'productsShop',
    initialState,
    reducers: {
        loadMoreProducts: (state)=>{
            state.visibleProducts += 9;
        },
        collapseProducts: (state) => {
            state.visibleProducts = 9;
        },
        setOption: (state,action: PayloadAction<"all" | "highToLow" | "lowToHigh">)=>{
            state.option = action.payload;
            filterAndSortProducts(state);
        },
        toggleCategory: (state, action: PayloadAction<string>) => {
            const category = action.payload;
            if (state.selectedCategories.includes(category)) {
                state.selectedCategories = state.selectedCategories.filter(cat => cat !== category);
            } else {
                state.selectedCategories.push(category);
            }
            filterAndSortProducts(state);
        },
        resetCategories: (state) => {
            state.selectedCategories = [];
            filterAndSortProducts(state);
        },
        setPriceRange: (state, action: PayloadAction<[number, number]>) => {
            state.priceRange = action.payload;
            filterAndSortProducts(state);
        }
    
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.status = "loading";
        }).addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.originalProducts = action.payload;
            state.products = action.payload;
            state.categoryCounts = calculateCategoryCounts(action.payload);
            filterAndSortProducts(state);
        }).addCase(fetchAllProducts.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message || "Something went wrong";
        })
    }
})


export const {loadMoreProducts,setOption, collapseProducts, toggleCategory, setPriceRange } = productsShopSlice.actions;
export default productsShopSlice.reducer;