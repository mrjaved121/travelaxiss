'use client';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Toaster } from '../components/ui/sonner';

export default function RootLayout() {
  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <Outlet />
    </>
  );
}