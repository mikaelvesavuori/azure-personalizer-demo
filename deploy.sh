# Reference: https://docs.microsoft.com/en-us/azure/cognitive-services/personalizer/how-to-create-resource

# Login
az login

# Create resource group
az group create \
  --name $LEARNING_LOOP_RG \
  --location $REGION

# Create learning loop, Personalizer resource
az cognitiveservices account create \
  --name $LEARNING_LOOP_NAME \
  --resource-group $LEARNING_LOOP_RG \
  --kind Personalizer \
  --sku F0 \
  --location $REGION \
  --yes

# Get your resource key, set it in config.js
az cognitiveservices account keys list \
  --name $LEARNING_LOOP_NAME \
  --resource-group $LEARNING_LOOP_RG
