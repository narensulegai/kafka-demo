
# Kafka Demo

![KafkaWorkflow](https://user-images.githubusercontent.com/436710/114246741-3755d880-9948-11eb-8ddf-e096d8017c5a.png)

Sample code to setup Kafka with NodeJS

Setps to setup Kafka locally https://medium.com/@Ankitthakur/apache-kafka-installation-on-mac-using-homebrew-a367cdefd273
Configure you local setting using .env file

```
node nodeServer.js # runs on port 5000
```
```
node kafkaServer.js # assuming Kafka broker is running on localhost:9092
```
Test sample API
```
curl --location --request POST 'localhost:5000/sum' \
--header 'Content-Type: application/json' \
--data-raw '{
    "a":1,
    "b":4
}'
```
