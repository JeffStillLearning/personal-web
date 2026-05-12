'use client';
import Icon from './Icon';
import { WA_URL } from '@/data/data';

export default function WaFloat() {
  return (
    <button className="wa-float" onClick={() => window.open(WA_URL, '_blank')} aria-label="Chat WhatsApp">
      <span className="wa-float-pulse" />
      <Icon name="whatsapp" size={22} />
      <span className="label">Chat WhatsApp</span>
    </button>
  );
}
