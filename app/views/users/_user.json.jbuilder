json.extract! user, :id, :name, :nickname, :password, :role, :remark, :created_at, :updated_at
json.url user_url(user, format: :json)