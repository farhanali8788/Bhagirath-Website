import { useState, useEffect } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import './StickyMobileCTA.css';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div className="sticky-cta">
      <button className="sticky-dismiss" onClick={() => setDismissed(true)}>
        <X size={12} />
      </button>
      <a href="tel:+919876543210" className="sticky-btn sticky-call">
        <Phone size={16} />
        <span>Call Now</span>
      </a>
      <a href="#contact" className="sticky-btn sticky-enquire">
        <MessageSquare size={16} />
        <span>Book Visit</span>
      </a>
    </div>
  );
}
