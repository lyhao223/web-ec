import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import jwt_decode, { jwtDecode } from "jwt-decode"
interface Name{
  firstName: string;
  lastName: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

interface User {
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}

interface LoginResponse {
   token: string;
}

interface DecodedToken {
  name: Name;
}

interface UserState {
  user: User | null;
  token: string | null;
  name: Name | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: User|any) => {
    const response = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    return response.json();
  }
);

export const loginUser = createAsyncThunk('user/loginUser', 
  async(loginData: {username: string, password: string}): Promise<LoginResponse> =>{
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  })

const initialState: UserState = {
  user: null,
  token: null,
  name: null,
  status: 'idle',
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading';
    }).addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.user = action.payload;
    }).addCase(registerUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || "Failed to register";
    }).addCase(loginUser.pending, (state) => {
      state.status = 'loading';
    }).addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.status = 'succeeded';
      state.token = action.payload.token;

      const decode: DecodedToken = jwtDecode(action.payload.token);
      state.name = decode.name;
    }).addCase(loginUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || "Failed to login";
    });
  }
}) 

export default userSlice.reducer;