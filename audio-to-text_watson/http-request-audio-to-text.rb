require 'net/http'
require "uri"

url = "https://stream.watsonplatform.net/speech-to-text/api/v1/recognize?timestamps=true&word_alternatives_threshold=0.9"
uri = URI.parse(url);

data = File.read('audio1-samadams.ogg')

http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.request_uri)
request.body = data
request.content_type = 'audio/ogg'
request.basic_auth '0bd0201d-4ba5-4ad5-b720-bef3a15b9a2f', 'UkqyOzthOIzP'
http.use_ssl = true
res = http.request(request)
puts res.body
