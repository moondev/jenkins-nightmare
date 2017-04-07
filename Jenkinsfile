node {
    
    checkout scm

    stage "Install jenkins"
        sh "kubectl apply -f jenkins-k8s.yaml"
        sh "sleep 2"
        sh "kubectl rollout status deployments/jenkins"
        sh "sleep 2"
}