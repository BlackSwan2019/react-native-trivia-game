pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh '''
                    echo "Hello, World. I am Jenkins."
                    ls -la
                '''
            }
        }
    }
}
