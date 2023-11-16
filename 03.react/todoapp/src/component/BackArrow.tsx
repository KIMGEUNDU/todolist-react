import { useNavigate } from 'react-router';

function BackArrow() {
  const navigate = useNavigate();

  return (
    <article className="arrow">
      <button type="button" onClick={() => navigate(-1)} className="backArrow">
        <img src="/Arrow.svg" alt="뒤로 가기" />
      </button>
    </article>
  );
}

export default BackArrow;
