node {
    def scmVars = checkout scm

    stage('Install') {
        sh 'npm install'
    }

    stage('Lint') {
        sh 'npm run lint'
    }

    stage('Build') {
        sh 'npm run build'
    }

    stage('Upload') {
        if(env.BRANCH_NAME == "master") {
            sh "tar -zcvf master-${scmVars.GIT_COMMIT}.tar.gz ./dist"
            googleStorageUpload bucket: 'gs://crazyinventor-build-artifacts/dsinfo', pattern: "master-${scmVars.GIT_COMMIT}.tar.gz", credentialsId: 'crazyinventor'
            sh "rm master-${scmVars.GIT_COMMIT}.tar.gz"
        }
    }
}
