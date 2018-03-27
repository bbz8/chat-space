class MessagesControllersController < ApplicationController
  before_action :set_messages_controller, only: [:show, :edit, :update, :destroy]

  # GET /messages_controllers
  # GET /messages_controllers.json
  def index
    @messages_controllers = MessagesController.all
  end

  # GET /messages_controllers/1
  # GET /messages_controllers/1.json
  def show
  end

  # GET /messages_controllers/new
  def new
    @messages_controller = MessagesController.new
  end

  # GET /messages_controllers/1/edit
  def edit
  end

  # POST /messages_controllers
  # POST /messages_controllers.json
  def create
    @messages_controller = MessagesController.new(messages_controller_params)

    respond_to do |format|
      if @messages_controller.save
        format.html { redirect_to @messages_controller, notice: 'Messages controller was successfully created.' }
        format.json { render :show, status: :created, location: @messages_controller }
      else
        format.html { render :new }
        format.json { render json: @messages_controller.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /messages_controllers/1
  # PATCH/PUT /messages_controllers/1.json
  def update
    respond_to do |format|
      if @messages_controller.update(messages_controller_params)
        format.html { redirect_to @messages_controller, notice: 'Messages controller was successfully updated.' }
        format.json { render :show, status: :ok, location: @messages_controller }
      else
        format.html { render :edit }
        format.json { render json: @messages_controller.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /messages_controllers/1
  # DELETE /messages_controllers/1.json
  def destroy
    @messages_controller.destroy
    respond_to do |format|
      format.html { redirect_to messages_controllers_url, notice: 'Messages controller was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_messages_controller
      @messages_controller = MessagesController.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def messages_controller_params
      params.require(:messages_controller).permit(:index)
    end
end
