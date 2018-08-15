RMDIR client\dist /S /Q
RMDIR server\build /S /Q
RMDIR build /S /Q

PUSHD client
CALL ng build
POPD

XCOPY server build\ /S /Q /Y /F
XCOPY client\dist\site build\site\ /S /Q /Y /F
XCOPY data\national-farmers-market-directory_snap.csv build\data\* /Q /Y /F