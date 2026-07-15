 @echo off
 cd /d "%~dp0"
 title Context Dictionary
 echo ============================================
 echo   Context Dictionary
 echo   Production Server
 echo ============================================
 echo.
 echo   Server: http://localhost:3095
 echo.
 echo   Press Ctrl+C to stop the server
 echo.
 echo ============================================
 echo.
 npx next start -p 3095
 echo.
 pause
