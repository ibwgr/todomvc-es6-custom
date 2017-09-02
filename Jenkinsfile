pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initializing...'
        node {
            env.NODEJS_HOME = "${tool 'node-8'}"
            env.PATH="${env.NODEJS_HOME}:${env.PATH}" // on windows node use ;
            sh 'npm --version'
        }
      }
    }

    stage('Checkout') {
      steps {
        echo 'Getting source code...'
        checkout scm
      }
    }

    stage('Build') {
      steps {
        echo 'Building dependencies...'
        sh 'npm install'
      }
    }
  }
}