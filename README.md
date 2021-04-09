# Kafka Demo

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
![KafkaWorkflow](https://user-images.githubusercontent.com/436710/114245777-f52b9780-9945-11eb-9ced-907e979fcf66.png)
