@echo off
cd /d "%~dp0"
title Context Dictionary
echo ============================================
echo   Context Dictionary
echo ============================================
echo.
echo  Starting server...
echo.

:: Open Edge browser (server will take a few seconds)
start msedge http://localhost:3095

npx next start -p 3095

echo.
pause
