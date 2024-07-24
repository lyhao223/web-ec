import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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

interface UserState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: User) => {
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

const initialState: UserState = {
  user: null,
  token: null,
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
    });
  }
}) 

export default userSlice.reducer;