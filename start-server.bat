@echo off
echo ================================================
echo   JGM Charitable Trust - Local Server
echo ================================================
echo.
echo Starting server on http://localhost:3000
echo Press Ctrl+C to stop the server.
echo.

:: Open browser after 2 seconds
start "" "http://localhost:3000"

:: Run server using npx serve (works with Node.js/npm)
npx --yes serve . -p 3000

echo.
echo Server stopped.
pause
