

pipeline{
    agent any
    stages {
        stage('Build') {
            steps {
        git branch: 'main', url: 'https://github.com/hariharan481/cosecants1.git'
                bat 'npm install'
            }
        }
         stage('Build Docker image') {
     steps {
        script {
          docker.build("17-alpine").run('-p 8009:3000')
        }
      }

     
    }
    stage('Login') {
      steps {
        bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        bat 'docker push lloydmatereke/jenkins-docker-hub'
      }
    }
  }
  post {
    always {
      bat'docker logout'
    }


    }

}
