@echo off
title Wlaz Studios Setup
echo ===================================================
echo      WLAZ STUDIOS - AUTO CONFIGURACION 
echo ===================================================
echo.
echo [1/2] Instalando librerias necesarias...
echo.

call npm install

echo.
echo [2/2] Iniciando servidor... 
echo.

call npm run dev
pause
