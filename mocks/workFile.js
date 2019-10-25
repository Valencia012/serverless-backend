aws cognito-idp sign-up --region us-east-1 --client-id 7ig4qv8mp4aa61v5elei1n0s2l --username valencia@mailinator.com --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
  --region us-east-1 \
  --user-pool-id us-east-1_aDhn1h3TX \
  --username valencia@mailinator.com