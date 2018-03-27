require 'test_helper'

class MessagesControllersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @messages_controller = messages_controllers(:one)
  end

  test "should get index" do
    get messages_controllers_url
    assert_response :success
  end

  test "should get new" do
    get new_messages_controller_url
    assert_response :success
  end

  test "should create messages_controller" do
    assert_difference('MessagesController.count') do
      post messages_controllers_url, params: { messages_controller: { index: @messages_controller.index } }
    end

    assert_redirected_to messages_controller_url(MessagesController.last)
  end

  test "should show messages_controller" do
    get messages_controller_url(@messages_controller)
    assert_response :success
  end

  test "should get edit" do
    get edit_messages_controller_url(@messages_controller)
    assert_response :success
  end

  test "should update messages_controller" do
    patch messages_controller_url(@messages_controller), params: { messages_controller: { index: @messages_controller.index } }
    assert_redirected_to messages_controller_url(@messages_controller)
  end

  test "should destroy messages_controller" do
    assert_difference('MessagesController.count', -1) do
      delete messages_controller_url(@messages_controller)
    end

    assert_redirected_to messages_controllers_url
  end
end
