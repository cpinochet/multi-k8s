# echo "Travis_Job id is $TRAVIS_JOB_ID"
# echo "Travis_commit is $TRAVIS_COMMIT"
# STC=`echo ${TRAVIS_COMMIT::7}`
# export $STC
# echo $STC
# echo "Travis_pull_requet_sha is $TRAVIS_PULL_REQUEST_SHA"
# docker build -t cpinochet/multi-client:${STC} -f ./client/Dockerfile ./client
# docker build -t cpinochet/multi-server:${STC} -f ./server/Dockerfile ./server
# docker build -t cpinochet/multi-worker:${STC} -f ./worker/Dockerfile ./worker

# # Take those images and push them to docker hub
# docker tag cpinochet/multi-client:${STC} cpinochet/multi-client:latest
# docker push cpinochet/multi-client:${STC}
# docker push cpinochet/multi-client:latest
# # Multi-server
# docker tag cpinochet/multi-server:${STC} cpinochet/multi-server:latest
# docker push cpinochet/multi-server:${STC}
# docker push cpinochet/multi-server:latest
# # Multi-worker
# docker tag cpinochet/multi-worker:${STC} cpinochet/multi-worker:latest
# docker push cpinochet/multi-worker:${STC}
# docker push cpinochet/multi-worker:latest

# docker push cpinochet/multi-client
# docker push cpinochet/multi-server
# docker push cpinochet/multi-worker

# Updating multi-client deployment manifest
echo "Updating multi-client deployment manifest"
CURRENT_TAG=$(grep 'multi-client' k8s/client-deployment.yaml | awk -F ":" '{print $3}')
echo $CURRENT_TAG
sed -i -r 's/'":$CURRENT_TAG"'/'":$STC"'/g' k8s/client-deployment.yaml
cat k8s/client-deployment.yaml | grep image

# Updating multi-server deployment manifest
echo "Updating multi-server deployment manifest"
CURRENT_TAG=$(grep 'multi-server' k8s/server-deployment.yaml | awk -F ":" '{print $3}')
echo $CURRENT_TAG
sed -i -r 's/'":$CURRENT_TAG"'/'":$STC"'/g' k8s/server-deployment.yaml
cat k8s/server-deployment.yaml | grep image

# Updating multi-worker deployment manifest
echo "Updating multi-worker deployment manifest"
CURRENT_TAG=$(grep 'multi-worker' k8s/worker-deployment.yaml | awk -F ":" '{print $3}')
echo $CURRENT_TAG
sed -i -r 's/'":$CURRENT_TAG"'/'":$STC"'/g' k8s/worker-deployment.yaml
cat k8s/worker-deployment.yaml | grep image

# kubectl apply -f k8s
