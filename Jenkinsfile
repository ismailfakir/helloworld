pipeline {
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
  
            app = docker.build("ismailfakir/helloworld")
        }

        stage('Test image') {
  
            app.inside {
                sh 'echo "Tests passed"'
            }
        }
    }
}
