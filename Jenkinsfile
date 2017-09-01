pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        echo 'Initializing...'
        def node = tool name: 'Node-7.4.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
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