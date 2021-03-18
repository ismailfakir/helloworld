pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Clone') {
            steps {
                // Get some code from a GitHub repository
                // git 'https://github.com/ismailfakir/helloworld.git'
                git branch: 'main', url: 'https://github.com/ismailfakir/helloworld.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Installing Dependencies...'
                sh 'npm install'
            }
        }
        /*stage('Run') {
            steps {
                echo 'Starting application...'
                sh 'npm start'
            }
        }*/
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}
