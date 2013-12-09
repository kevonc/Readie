class ArticlesController < ApplicationController
  def scrape
    agent = Mechanize.new
    url = params[:url]
    page = agent.get(url)
    begin
      title = page.search("meta[property='og:title']").attr("content").text
    rescue
      title = page.search("title").text
    end

    article = {}
    article["title"] = title
    article["url"] = url
    article["date"] = Date.today

    respond_to do |format|
      format.json { render json: article }
    end
  end
end
