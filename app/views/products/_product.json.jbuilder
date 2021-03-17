json.extract! product, :id, :name, :type, :material, :created_at, :updated_at
json.url product_url(product, format: :json)
