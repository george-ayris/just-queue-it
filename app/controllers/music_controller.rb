class MusicController < ActionController::Base
	def play
		render text: "Song playing"
	end
end