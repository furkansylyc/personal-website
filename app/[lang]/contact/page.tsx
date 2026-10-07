'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { site } from '@/lib/site';

export default function ContactPage() {
  const params = useParams();
  const langParam = Array.isArray(params?.lang) ? params.lang[0] : params?.lang;
  const locale = (locales.includes(langParam as Locale) ? langParam : 'en') as Locale;
  const dict = getDictionary(locale);
  const { contactPage: t } = dict;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      alert(t.form.invalid);
      return;
    }

    setSubmitting(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <div className="section-head" data-reveal>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="section-title">{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="contact-page__grid">
          {/* Left: Direct Information */}
          <div className="contact-page__info" data-reveal>
            <div className="contact-info-block">
              <span className="contact-info-block__title mono">{t.direct}</span>
              <a href={`mailto:${site.email}`} className="link contact-info-block__value">
                {site.email} <span className="arrow arrow--diag">↗</span>
              </a>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-block__title mono">{t.social}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  GitHub <span className="arrow arrow--diag">↗</span>
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  LinkedIn <span className="arrow arrow--diag">↗</span>
                </a>
              </div>
            </div>

            <div className="contact-info-block">
              <span className="contact-info-block__title mono">{t.location}</span>
              <p className="contact-info-block__value">
                {site.location.city}, {site.location.country}
              </p>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div data-reveal>
            <form onSubmit={handleSubmit} className="contact-form">
              {status === 'success' && (
                <div className="form-feedback form-feedback--success">
                  <strong>{t.form.successTitle}</strong> {t.form.successText}
                </div>
              )}

              {status === 'error' && (
                <div className="form-feedback form-feedback--error">
                  <strong>{t.form.errorTitle}</strong> {t.form.errorText}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  {t.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  {t.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  {t.form.subject}
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn--primary btn--lg"
              >
                {submitting ? t.form.sending : t.form.send} <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
