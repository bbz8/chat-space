require 'test_helper'

class MessagesControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get messages_controller_index_url
    assert_response :success
  end

end
