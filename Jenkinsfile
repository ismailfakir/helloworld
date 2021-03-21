pipeline {

    environment {
        imagename = "ismailfakir/helloworld"
        registryCredential = 'ismail-dockerhub'
        dockerImage = ''
    }

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

        stage('Building image') {
            steps {
                echo 'Starting to build docker image'

                script {
                    dockerImage = docker.build("ismailfakir/helloworld:${env.BUILD_ID}")
                }
            }
        }

        stage('Deploy Image') {
        steps {
            script {
                docker.withRegistry( '', registryCredential ) {
                    dockerImage.push("$BUILD_NUMBER")
                    dockerImage.push('latest')
                    }
                }
            }
        }
        
        stage('Remove Unused docker image') {
            steps{
                sh "docker rmi $imagename:$BUILD_NUMBER"
                sh "docker rmi $imagename:latest"

            }
        }
    }
}
