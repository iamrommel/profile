#! /bin/bash
function confirm()
{
    echo -n "$@ "
    read -e answer
    for response in y Y yes YES Yes Sure sure SURE OK ok Ok
    do
        if [ "_$answer" == "_$response" ]
        then
            return 0
        fi
    done

    # Any answer other than the list above is considered a "no" answer
    return 1
}

confirm Are you sure you want to deploy?
 if [ $? -eq 0 ]
 then
	git pull
    echo "*** updating version ******************************************"
    version=$(npm --no-git-tag-version version patch)
    echo $version

#    echo "*** updating the environment variables ************************"
#    echo $1
#    cp ./.tools/.env.$1 .env
#
#    echo "*** refreshing node_modules folder ****************************"
#    yarn
#
#    echo "*** building the app ******************************************"
#    npm run build

    echo "*** deploying the app thru caprover ****************************"
    caprover deploy -h https://captain.cdd.kto12crs.com  -b master -a profile -d

    echo "*** pushing to repository *************************************"
    git add -A
    git commit -a -m "Created tags and Deployed $version"
    git tag "$version"
    git push && git push --tags
    read -rsp $'Done!!! Press enter to exit..' key
 fi

