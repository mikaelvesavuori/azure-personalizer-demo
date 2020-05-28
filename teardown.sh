az cognitiveservices account delete \
  --name $LEARNING_LOOP_NAME \
  --resource-group $LEARNING_LOOP_RG

az group delete \
  --name $LEARNING_LOOP_RG