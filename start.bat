@echo off
title MiHotelApp - Inicializador Full-Stack
echo ===================================================
echo        INICIANDO SISTEMA MIHOTELAPP (MONOREPO)
echo ===================================================
echo.

echo [1/4] Verificando entorno Backend...
if not exist "backend\node_modules\" (
    echo Instalando dependencias del Backend...
    cd backend
    call npm install
    cd ..
) else (
    echo Dependencias del Backend listas.
)

if not exist "backend\uploads\" (
    mkdir "backend\uploads"
)

echo.
echo [2/4] Verificando entorno Frontend...
if not exist "frontend\node_modules\" (
    echo Instalando dependencias del Frontend...
    cd frontend
    call npm install
    cd ..
) else (
    echo Dependencias del Frontend listas.
)

echo.
echo [3/4] Iniciando servidor Backend (Node.js + Express + SQLite) en puerto 3001...
start "MiHotelApp - Backend (Port 3001)" cmd /k "cd backend && npm start"

echo [4/4] Iniciando servidor Frontend (React + Vite + Tailwind)...
start "MiHotelApp - Frontend (Vite)" cmd /k "cd frontend && npm run dev"

echo.
echo ===================================================
echo   Servidores desplegados correctamente en ventanas
echo   separadas. Puedes cerrar esta ventana.
echo ===================================================
pause