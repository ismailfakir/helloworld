node {
    def app
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Get code from a GitHub repository'
                git branch: 'main', url: 'https://github.com/ismailfakir/helloworld.git'
            }
        }
        
        stage('Testing App') {
            steps {
                echo 'Installing Dependencies...'
                sh 'npm install'
                echo 'Testing app ..'
                sh 'npm test'
            }
        }

        stage('Build image') {
            steps {
                echo 'Starting to build docker image'

                script {
                    def customImage = docker.build("ismailfakir/helloworld:${env.BUILD_ID}")
                    customImage.push()
                }
            }
        }
    }
}