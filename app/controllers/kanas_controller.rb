class KanasController < ApplicationController
  def index
    @kanas = Kana.all
  end

  def show
    @kana = Kana.find(params[:id])
  end
end
