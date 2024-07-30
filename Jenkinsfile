pipeline {
  agent any
  stages {
    stage('git') {
      steps {
        git(url: 'https://github.com/vivekGitLearn/portfolio', branch: 'dev')
      }
    }

    stage('') {
      steps {
        echo 'tested git'
        sh 'ls '
      }
    }

  }
}