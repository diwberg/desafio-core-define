"use client";

import { Facebook, Twitter, Linkedin, Copy, Share2, Check, X } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

export default function ShareButtons({ url, title, description = "" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showShareIcons, setShowShareIcons] = useState(false);

  // URLs de compartilhamento para diferentes plataformas
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar link:", err);
    }
  };

  const handleShare = async () => {
    // Verifica se a API de compartilhamento nativa está disponível
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch {
        console.log("Compartilhamento cancelado ou falhou");
        setShowShareIcons(true);
      }
    } else {
      setShowShareIcons(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <button
          onClick={handleShare}
          className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-2 transition-colors"
          aria-label="Compartilhar"
        >
          <Share2 size={18} />
        </button>
        
        {showShareIcons && (
          <>
            <div className="flex items-center space-x-2 ml-3">
              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-full p-2 transition-colors"
                aria-label="Compartilhar no Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-full p-2 transition-colors"
                aria-label="Compartilhar no Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href={linkedinShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] rounded-full p-2 transition-colors"
                aria-label="Compartilhar no LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <button
                onClick={handleCopyLink}
                className="bg-gray-700/20 hover:bg-gray-700/30 text-white rounded-full p-2 transition-colors"
                aria-label="Copiar link"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
              <button
                onClick={() => setShowShareIcons(false)}
                className="bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-full p-2 transition-colors ml-1"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>
          </>
        )}
      </div>
      
      {copied && (
        <div className="mt-2 text-green-500 text-sm animate-fade-in">
          Link copiado!
        </div>
      )}
    </div>
  );
} 