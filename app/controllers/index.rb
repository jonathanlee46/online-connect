get '/' do
  
  redirect '/main'
end

get '/main' do
  @user = User.find_by(email: params[:email])
  erb :main
end

get '/login' do

end


post '/login' do
  p params
  user = User.find_by(email: params[:email])
  p user
  if user.nil?
    erb :login_fail
  else
    if user.password == params[:password]
      session[:user_id] = user.id
      erb :_game
    else
      erb :login_fail
    end
  end
end

get '/register' do
  p "hello"
  erb :_register
end

post '/register' do
  p params
  user = User.new(
    name:  params[:username],
    email: params[:email],
    password: params[:password],
    )
  user.password = params[:password]
  user.save!

  session[:user_id] = user.id

  erb :_reg_done
end

get '/logout' do
  erb :logout
end

post '/logout' do
  session[:user_id] = nil
  redirect '/logout'
end