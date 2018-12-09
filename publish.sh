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
    version=$(npm --no-git-tag-version version patch)
    echo $version
    echo "==========refreshing node_modules folder============================="
    yarn

    echo "==========building the app==========================================="
    captainduckduck deploy -s -h https://captain.cdd-beta.totalmilk.com -a iamrommel -b master

    echo "=========pushing to repository=============================================="
    git add -A
    git commit -a -m "Created tags and Deployed $version"
    git tag "$version"
    git push && git push --tags
    read -rsp $'Done!!! Press enter to exit..' key
 fi

