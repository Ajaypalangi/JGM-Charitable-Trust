@echo off
echo ================================================
echo   JGM Charitable Trust - Local Server
echo ================================================
echo.

:: Try Node.js / npx serve first
where node >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo Starting server with Node.js on http://localhost:3000
    echo Press Ctrl+C to stop.
    echo.
    start "" "http://localhost:3000"
    npx serve . -p 3000
    goto :end
)

:: Try Python 3
where python >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo Starting server with Python on http://localhost:3000
    echo Press Ctrl+C to stop.
    echo.
    start "" "http://localhost:3000"
    python -m http.server 3000
    goto :end
)

:: Try Python launcher (py)
where py >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo Starting server with Python launcher on http://localhost:3000
    echo Press Ctrl+C to stop.
    echo.
    start "" "http://localhost:3000"
    py -m http.server 3000
    goto :end
)

echo ERROR: Neither Node.js nor Python found.
echo Please install one of them, or use VS Code Live Server extension.
echo.
pause

:end
