#!/bin/bash
SCRIPT_DIR="$(dirname "$0")"
BUILD_NUMBER=${BUILD_BUILDNUMBER:-`date`}
PUBLIC_DIR="$(realpath "$SCRIPT_DIR/public")"
CACHE_DIR="$(realpath "$SCRIPT_DIR/.cache")"

echo "building to $PUBLIC_DIR"

rm $PUBLIC_DIR -Rf || exit 1
rm $CACHE_DIR -Rf || exit 1
git clone -b gh-pages `git remote get-url origin` $PUBLIC_DIR || exit 1
# npm install || exit 1
# npm run build || exit 1
cd $PUBLIC_DIR || exit 1
git add * || exit 1
git commit -a -m "Release $BUILD_NUMBER" || exit 1

echo "Using USER $GIT_USERNAME"

git push || exit 1

echo "published release named \"$BUILD_NUMBER\""
