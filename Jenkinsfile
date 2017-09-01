pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        node(label: 'nodeify') {
          sh 'npm install'
        }
        
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}