RMDIR client\dist /S /Q
RMDIR build /S /Q

PUSHD client
CALL npm i
CALL ng build
POPD

PUSHD server
CALL npm i
CALL npx tsc
POPD

XCOPY server\build\* build\ /S /Q /Y /F
XCOPY server\package.json build\ /Q /Y /F
XCOPY client\dist\site build\site\ /S /Q /Y /F
XCOPY data build\data\* /Q /Y /F