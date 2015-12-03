# Homepage (Root path)
get '/' do
  erb :index
end
get '/homies/' do
  Homie.all.to_json
end

post '/new_homie' do
  results = {result: false}
  name = params[:name]
  email = params[:email]
  phone = params[:phone]

  homie = Homie.new name: name, email: email, phone: phone

  if homie.save
    results[:result] = true
    results[:homie_id] = homie.id
  end
  results.to_json
end