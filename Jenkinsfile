pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'gulp build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}