type HeroDescriptionProps = {
  description: string;
};

function HeroDescription({ description }: HeroDescriptionProps) {
  if (!description) return null;

  return <p className="heroes-feature-description">{description}</p>;
}

export default HeroDescription;
