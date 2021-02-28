db.auth('mongodb', 'mongodb')

db = db.getSiblingDB('db_docker_example')

db.createUser({
    user: 'test-user',
    pwd: 'test-password',
    roles: [{
        role: 'root',
        db: 'test-database',
    }, ],
});