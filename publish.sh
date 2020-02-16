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

confirm Are you sure you want to deploy to "## $1 ##"?
 if [ $? -eq 0 ]
 then
	git pull
    echo "*** updating version ************************"
    version=$(npm --no-git-tag-version version patch)
    echo $version

   echo "*** updating the environment variables *******"
   echo $1
   cp ./.tools/.env.$1 .env

    echo "*** refreshing node_modules folder **********"
    yarn

    echo "*** building the app ************************"
    npm run build

    echo "*** build the compress file for deployment***"
    tar -cvf ./deploy.tar --exclude='*.map' ./captain-definition ./build/* ./.dockerignore ./package.json

    # select the correct server
    server=https://captain.cdd.kto12crs.com
    echo "*** deploying to $server caprover server ****"
    # store here the password, it's fine, its a private repository anyway
    caprover deploy -h $server  -t ./deploy.tar -a profile

    echo "*** removing deploy.tar file  ***************"
    rm -rf deploy.tar

    echo "*** pushing to repository *******************"
    git add -A
    git commit -a -m "Created tags and Deployed $version"
    git tag "$version"
    git push && git push --tags

    echo "Deployment of version $version:"
    echo "███████╗██╗   ██╗ ██████╗ ██████╗███████╗███████╗███████╗██╗"
    echo "██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝██║"
    echo "███████╗██║   ██║██║     ██║     █████╗  ███████╗███████╗██║"
    echo "╚════██║██║   ██║██║     ██║     ██╔══╝  ╚════██║╚════██║╚═╝"
    echo "███████║╚██████╔╝╚██████╗╚██████╗███████╗███████║███████║██╗"
    echo "╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝╚═╝"

    read -rsp $'Done!!! Press enter to exit..' key
 fi

