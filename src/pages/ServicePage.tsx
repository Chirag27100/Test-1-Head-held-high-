import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import ServiceHero from '../components/services/ServiceHero';
import ServiceFeatures from '../components/services/ServiceFeatures';
import ServiceCTA from '../components/services/ServiceCTA';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceCTA service={service} />
    </>
  );
}
